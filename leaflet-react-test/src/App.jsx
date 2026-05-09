import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup, Polygon } from 'react-leaflet'

function App() {

  const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

  const idk = [
                
      [
          -45.51313686727258,
          -22.943924476033715
      ],
      [
          -45.51021288891366,
          -22.938418193344887
      ],
      [
          -45.504575803430555,
          -22.936958280700026
      ]
                
  ]

const invertedIDK = [
      [
          -22.943924476033715,
          -45.51313686727258
      ],
      [
          -22.938418193344887,
          -45.51021288891366
      ],
      [
          -22.936958280700026,
          -45.504575803430555
      ]
]
const purpleOptions = { color: 'purple' }

  return (
    <>
      <MapContainer center={[-22.943924476033715, -45.51313686727258]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Polygon pathOptions={purpleOptions} positions={invertedIDK} />
      </MapContainer>
    </>
  )
}

export default App
