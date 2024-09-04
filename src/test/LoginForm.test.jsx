import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../components/LoginForm";

describe("Testing LoginForm Componente", () => {
  test("Should render title", () => {
    render(<LoginForm />);
    const title = screen.getByText(/debe ingresar/i); //Obtenemos el h4
    expect(title).toBeDefined(); //Verificamos si se renderizo
  });

  test("Should render first input", () => {
    render(<LoginForm />);
    const email = screen.getByRole("email"); //Obtenemos el input (hay que agregar el atributo role en el input)
    expect(email).toBeVisible(); //Verificamos si esta visible
  });

  test("Should change second input", () => {
    render(<LoginForm />);
    const pass = screen.getByTestId("password"); //Obtenemos el input de password
    fireEvent.change(pass, { target: { value: "password123" } }); //Modificamos el input
    expect(pass.value).toBe("password123"); //Verifica que pass.value === password123
  });

  test("Should call button function", () => {
    //Funcion que se ejecuta cuando hacemos click en el boton
    const handleClick = vi.fn(); //Usamos vi.fn() para decirle al teste que handleClick es una funcion (mockeamos la funcion)

    render(<LoginForm handleClick={handleClick} />); //Enviamos la funcion al componente
    const button = screen.getByText("Enviar"); //Obtenemos el boton
    fireEvent.click(button); //Hacemos click en el boton
    expect(handleClick).toBeCalledTimes(1); //Verificamos que handleClick haya sido llamada una vez al hacer click en el boton
  });
});
