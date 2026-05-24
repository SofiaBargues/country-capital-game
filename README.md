## Country Capital Game

Build a React component that renders a country-capital matching game.

### Objective

The goal is to match each country with its correct capital.

### Component API

Create a component called `Game` that receives a `data` object as a prop.

Each key in the object represents a country, and each value represents its capital.

```jsx
const DATA = {
  India: "Delhi",
  Russia: "Moscow",
  China: "Beijing",
};
```

Example usage:

```jsx
<Game data={DATA} />
```

### Requirements

- Render all countries and capitals on the screen.
- Countries and capitals must appear in random order.
- Each option should be selectable.
- The user can select up to 2 options at a time.
- The default border color of each option should be `#414141`.
- When an option is selected, its border color should change to `blue`.
- If the selected country and capital are a correct match:
  - Change both selected option borders to `#66cc99`.
  - Remove both options from the screen after `1000ms`.
- If the selected country and capital are not a correct match:
  - Change both selected option borders to `red`.
  - Reset both options after `1000ms`.
- When there are no options left, display the message:

```txt
Congratulations
```

### Notes

- The game should work with any valid country-capital object passed through the `data` prop.
- Do not hardcode the countries or capitals inside the component.
