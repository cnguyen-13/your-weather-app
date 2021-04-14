import axios from "axios"
import { imageUrl } from "../urls/image-url"
import { generateRandomIndexs } from "../../functions/city-background-images/generate-random-indexs"

export async function getBgImages(cityParam: string) {
	const url: string = imageUrl(cityParam)
	const res = await axios.get(url)
	const images: [] = res.data.results
	const idxs: number[] = generateRandomIndexs(images.length)
	const bgImages: string[] = idxs.map(idx => {
		const image: any = images[idx]
		const imageUrl: any = image.urls.full
		return imageUrl
	})
	return bgImages
}
