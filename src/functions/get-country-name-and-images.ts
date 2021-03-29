import axios from "axios"
import { coordinatesUrl } from "./urls/coordinates-url"
import { imageUrl } from "./urls/image-url"
import { generateRandomIndexs } from "../functions/city-background-images/generate-random-indexs"

export async function getCountryName(
	countrySetterFunc: any,
	invalidCitySetterFunc: any,
	cityParam: string
) {
	try {
		const url: string = coordinatesUrl(cityParam)
		const response = await axios.get(url)
		const country: string = response.data.sys.country
		countrySetterFunc(country)
	} catch (err) {
		invalidCitySetterFunc(true)
	}
}

//Gets background images
export async function getBgImages(bgImagesSetterFunc: any, cityParam: string) {
	const url: string = imageUrl(cityParam)
	const response = await axios.get(url)
	const dataArr: [] = response.data.results
	const idxs: number[] = generateRandomIndexs(dataArr.length)
	const bgImages: any = idxs.map(idx => {
		const image: any = dataArr[idx]
		const imageUrl: any = image.urls.full
		return imageUrl
	})
	bgImagesSetterFunc(bgImages)
}
