import { useEffect, useRef } from 'react'
import { useMap } from 'react-leaflet'
import { GeodesicLine as LeafletGeodesicLine } from 'leaflet.geodesic'

const GeodesicLine = props => {
  const { positions, options } = props
  map = useMap()
  const line = useRef(null)

  useEffect(() => {
    if (!line.current) {
      line.current = LeafletGeodesicLine(positions, options)
    }
  }, [map])

  useEffect(() => {
    if (line.current) {
      line.current.setLatLngs(positions)
    }
  }, [positions])

  useEffect(() => {
    if (line.current) {
      line.current.setLatLngs(options)
    }
  }, [options])
}

export default GeodesicLine
