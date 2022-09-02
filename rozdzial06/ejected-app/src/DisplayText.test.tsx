import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import DisplayText from "./DisplayText";
import "@testing-library/jest-dom/extend-expect";

jest.mock("./UserTodos");

describe("Test komponentu DisplayText", () => {
    const userFullName = "Janek Tester";

    const getUserFullNameMock = (
        username: string
    ) : [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
        const promise = new Promise<string>((res, rej) => {
            res(userFullName);
        });
        const getUserFullName = jest.fn(
            async (username: string): Promise<string> => {
                return promise;
            }
        );

        return [promise, getUserFullName];
    };


    it("jest wyswietlany bez problemow", () => {
        const username= "testuser";
        const [promise, getUserFullName] = getUserFullNameMock(username);
        const { baseElement } = render(<DisplayText getUserFullName={getUserFullName} />);      
        expect(baseElement).toBeInTheDocument();
    });

    it("jest zgodny z migawką", () => {
        const username= "testuser";
        const [promise, getUserFullName] = getUserFullNameMock(username);
        const { baseElement } = render(<DisplayText getUserFullName={getUserFullName} />);  
        expect(baseElement).toMatchSnapshot();
    })

    it("uzyskuje text z pola", () => {
        const username = "testuser";
        const [promise, getUserFullName] = getUserFullNameMock(username);
        const { getByTestId } = render(<DisplayText getUserFullName={getUserFullName} />);
        const input = getByTestId("user-input");
        fireEvent.change(input, { target: { value: username }});
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(username);
    });

    // it("wyswietla komunikat powitalny", async () => {
    //     const username = "testuser";
    //     const [promise, getUserFullName] = getUserFullNameMock(userFullName);

    //     const msg = `Witaj na zajęciach z testowania Reacta, ${username}!`;
    //     const { getByTestId } = render(<DisplayText getUserFullName={getUserFullName} />);
    //     const input = getByTestId("user-input");
    //     const label = getByTestId("final-msg");
    //     fireEvent.change(input, { target: { value: username } });
    //     const btn = getByTestId("input-submit");
    //     fireEvent.click(btn);

    //     expect(label).toBeInTheDocument();
    //     await waitFor(() => promise);
    //     expect(label.innerHTML).toBe(msg);
    // })
})

