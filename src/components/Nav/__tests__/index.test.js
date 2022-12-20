import React from "react"
import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom"
import Nav from ".."

afterEach(cleanup)

describe("Nav component", () => {
    it("renders", () => {
        render(<Nav></Nav>)
    })
    it("matches snapshot", () => {
        const {asFragment} = render(<Nav></Nav>)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe("emoji is visible", () => {
    it("insers emoji into the h2 element", () => {
        const {getByLabelText} = render(<Nav></Nav>)
        expect(getByLabelText("camera")).toHaveTextContent("📸")
    })
})

describe("link is visible", () => {
    it("inserts text into the links", () => {
        const {getByTestId} = render(<Nav></Nav>)
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!")
        expect(getByTestId("about")).toHaveTextContent("About Me")
    })
})