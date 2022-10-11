import { useState } from 'react'
import { images } from './images'
import Loading from './Loading'

function App() {
  const [currentImage, setCurrentImage] = useState(0)

  const [numLoaded, setNumLoaded] = useState(0)

  const handleCLick = () => {
    const length = images.length - 1

    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0
    })
  }

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1)
  }

  return (
    <section>
      <header>
        <h1>Motel.</h1>
        <h2>
          Photography <br /> by{' '}
          <a
            href="https://unsplash.com/@bappps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Braxton Apana
          </a>
        </h2>
      </header>
      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleCLick}
            onLoad={handleImageLoad}
            className={currentImage === index ? 'display' : 'hide'}
          />
        ))}
      </figure>
    </section>
  )
}

export default App
