import { Gallery } from "react-grid-gallery";

const images = [
   {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 150,
      tags: [
         { title: "category", value: "Comics" },
         { title: "filterName", value: "Argentina" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
         { title: "category", value: "Comics" },
         { title: "filterName", value: "Australia" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 220,
      height: 212,
      tags: [
         { title: "category", value: "Comics" },
         { title: "filterName", value: "Austria" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
      width: 320,
      height: 213,
      tags: [
         { title: "category", value: "Movie" },
         { title: "filterName", value: "Belgium" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
      width: 320,
      height: 213,
      tags: [
         { title: "category", value: "Movie" },
         { title: "filterName", value: "Brazil" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
      width: 320,
      height: 213,
      tags: [
         { title: "category", value: "Sci-fi" },
         { title: "filterName", value: "Canada" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
      width: 320,
      height: 179,
      tags: [
         { title: "category", value: "Sci-fi" },
         { title: "filterName", value: "China" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
      width: 320,
      height: 215,
      tags: [
         { title: "category", value: "NFT" },
         { title: "filterName", value: "France" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
      width: 257,
      height: 320,
      tags: [
         { title: "category", value: "UFO" },
         { title: "filterName", value: "United Kingdom" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
      width: 226,
      height: 320,
      tags: [
         { title: "category", value: "UFO" },
         { title: "filterName", value: "United States" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
];

function SettingGallery() {
    return (
        <Gallery
            images={images}
            enableImageSelection={false}
        />
    );
}

export default SettingGallery;
