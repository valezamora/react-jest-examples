import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from "react";
import OneClickButton from "./oneClickButton";

test('Disable button after one click', async () => {
    // arrange

    // act
    render(<OneClickButton />);

    // assert
    const button = screen.getByRole('button', {name: /One click button/i})
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

    await userEvent.click(button);

    expect(button).toBeDisabled();
});
