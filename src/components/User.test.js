import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./user";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders user data", async () => {
    const fakeUser = {
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render(<User id="1" />, container);
    });

    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.username);
    expect(container.textContent).toContain(fakeUser.email);

    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
});