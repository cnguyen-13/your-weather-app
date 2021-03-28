interface styles {
	backgroundSize: string
	backgroundPosition: string
	backgroundRepeat: string
	backgroundImage: string
	backgroundAttachment: string
}

export function getStylesWithBg(imageUrl: string): styles {
	return {
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageUrl})`,
		backgroundAttachment: "fixed",
	}
}
