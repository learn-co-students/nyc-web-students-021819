# CSS Fundamentals

## Objectives

* Discuss what CSS does and why it's important
* Differentiate between inline, internal, and external stylesheets
* Understand how to use class, id, and element selectors, and selector order of importance
* Demonstrate the use of the box model, floats, clear, positioning, flex box, CSS grid in page layout
* Introduce CSS Frameworks like Bootstrap, Semantic UI, Materialize

![](https://media.giphy.com/media/it6W8D4FfvaPC/giphy.gif)

## CSS Basics

CSS - Cascading Style Sheets
Styles things, makes things look pretty

## Stylesheets and Selectors

How do we add CSS to our HTML page?
* Inline
* Internal
* External

Types of CSS selectors
* HTML tags/elements
* Classes
* Ids

```
Element Selector:
p {
  font-size: 20px;
}

Class Selector:
.navbar {
  margin-bottom: 0px;
}

ID Selector:
#main-page-title {
  font-family: sans-serif;
}

```


## The Box Model

4 Elements of the box model:
* Content
* Padding
* Border
* Margin

(Use Chrome Web Developer to explore!)

## Layouts & Positioning - Floats & Clear
Floats - take our elements outside of the standard flow of the webpage

```
.grand-canyon-image {
  width: 400px;
  float: left;
}
```

Use clear to make your elements 'clear' any floats and sit inline with the regular flow of the page

```
.park-info {
  clear: both;
}
```

## Layouts & Positioning - CSS Grid, Flexbox
Makes it easy to create well-designed and responsive pages

#### CSS Grid
Grid-based layout, two-dimensional system

Example makes dynamic auto-fill grid:
```
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
}
```

Example makes 5 x 5 grid, where each column and each row is divided into 5 parts each filling 20% of the column and row, respectively:
```
.image-gallery {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  grid-gap: 10px;
}
```

Example makes 3x3 grid, where each column is divided into 3 fractional units and each row is divided into 3 fractional units:
```
.image-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
}
```

`grid-template` is another way to generate your grid,and it combines both `grid-template-columns` and `grid-template-rows`

You can also target specific elements within the grid and specify where there should start/end via:
`grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`, `grid-column`, `grid-row`, `grid-area`

#### Flexbox
One-dimensional system (row or column based)

```
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```

Some properties of flexbox include:

- `justify-content` - aligns items along the main axis
  - Can specify `flex-end`, `flex-start`, `center`, `space-between`, `space-around`
- `align-items` - aligns items along the cross axis
  - Can specify `flex-end`, `flex-start`, `center`, `baseline`, `stretch`
- `flex-direction` - choose the direction of items along the main axis
  - Can specify `row`, `row-reverse`, `column`, `column-reverse`
- `flex-wrap` - choose whether items must remain on single lines or if they can wrap to new lines
  - Can specify `nowrap`, `wrap`, `wrap-reverse`
- `flex-flow` - combines `flex-direction` and `flex-wrap`

You can also align specific flex items along the cross axis with `align-self`


## CSS Frameworks

Does a lot of the CSS work for us
- [Semantic UI](https://semantic-ui.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Materialize](https://materializecss.com/)

## Resources

- [Awwwards](https://www.awwwards.com/)
- [codrops](https://tympanus.net/codrops/css_reference/)
- [CSS Tricks](https://css-tricks.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Zen Garden](http://www.csszengarden.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [CSS Grid Garden](http://cssgridgarden.com/)
