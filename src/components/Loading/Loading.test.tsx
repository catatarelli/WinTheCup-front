/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render, screen } from "@testing-library/react-native";
import React from "react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a loading gif", async () => {
      const gifId = "Loading";

      render(<Loading />);

      const displayedGif = screen.queryByTestId(gifId);

      expect(displayedGif).toBeDefined();
    });
  });
});
