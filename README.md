# AlbumImg
<br/>
React Photo Album – 3 Left + 3 Right Layout
This is a simple React-based photo album web application. It displays images in a 3-left, 3-right column layout per page, supports pagination, and features clean hover effects to mimic a modern photo album.
<br/>
Features
Displays 6 images per page (3 on left, 3 on right)

 Pagination controls (Previous / Next)

 Responsive layout with clean design

 Hover effects on images (zoom and shadow)
 <br/>
 react-photo-album/
│
├── public/
│   └── img/
│       └── car.png (sample image used)
│
├── src/
│   ├── pages/
│   │   ├── ImgGrid.js
│   │   └── Pagination.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── pages/imgGrid.css
│
├── package.json
└── README.md
<br/>
<br/>
How to Add Your Own Images
Place image files in the /public/img/ folder (e.g., public/img/car.png)

Modify the staticImages array in App.js to reference your files
<br/>
 Responsive Design
The layout adapts to mobile, tablet, and desktop screen sizes. On smaller screens, the album stacks vertically.


