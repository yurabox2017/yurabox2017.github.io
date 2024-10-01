import { ReactElement, ReactNode } from "react"
export default interface IModal extends ReactElement {
    visible: boolean,
    children: ReactNode
}