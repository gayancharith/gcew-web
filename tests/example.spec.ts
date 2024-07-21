import { test, expect } from "@playwright/test";

test("get to home page", async ({ page }) => {
  await page.goto("http:localhost:4000");
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();
});
