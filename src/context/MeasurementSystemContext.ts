import { createContext } from "react"
import { MS } from "../constants/day-forecast/measurement-system"

const MeasurementSystemContext: any = createContext(MS.METRIC)

export default MeasurementSystemContext
