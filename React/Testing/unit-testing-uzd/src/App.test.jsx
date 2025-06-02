import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('2+2=4'), () => {
    expect(2 + 2).toBe(4);
}

test('uzduotis', () => {
    const name = "John";
    const HelloWorld = () => <p>Hello, {name}</p>;

    render(<HelloWorld />);
    expect(screen.getByText('Hello, John')).toBeInTheDocument();
});

test("profile image 1", () => {
    const imagePath = "https://placekitten.com/200/300";

    const ProfileImage = () => <img src={imagePath} alt="Profile" />;

    render(<ProfileImage />);
    expect(screen.getByRole("img")).toHaveAttribute("src", imagePath);
});


test("profile image 2", () => {
    const html = `<img src="https://placekitten.com/200/300" style="border: 1px solid blue;" />`;

    const ProfileImage = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

    render(<ProfileImage />);
    expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border: 1px solid blue;"
    );
});

test("avatar", () => {
    const character = {
        name: "John Doe",
        image: "https://placekitten.com/200/300",
    };

    const Avatar = () =>
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
        </div>;

    render(<Avatar />);
    expect(screen.getByRole("heading")).toHaveTextContent(character.name);
    expect(screen.getByRole("img")).toHaveAccessibleName(character.name);
    expect(screen.getByRole("img")).toHaveAttribute("src", character.image);
});


test("format number", () => {
    const price = 12;

    const ProductPrice = () => {
        return <p>Price: {price.toFixed(2)}</p>;
    };

    render(<ProductPrice />);
    expect(screen.getByText(/Price: 12.00/)).toBeInTheDocument();
});

test("john doe profile 1", () => {
    const html = `
      <div>
        <h1>John Doe</h1>
        <img src="https://placekitten.com/200/300">
      </div>
    `;

    const Profile = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

    render(<Profile />);
    expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
    expect(screen.getByRole("img")).toBeInTheDocument();
});

test("customer card", () => {
    const html = `<section data-testid="blueberry"><h1>BlueBerry INC</h1></section>`;

    const CustomerCard = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

    render(<CustomerCard />);
    expect(screen.getByTestId("blueberry")).toBeInTheDocument();
});