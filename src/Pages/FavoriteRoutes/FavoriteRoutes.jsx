import React from 'react'
import TripItem from '../../Components/TripItem/TripItem'
const FavoriteRoutes = () => {
  return (
    <div className="md:p-8 p-3">
      <h2 className="text-3xl font-semibold mb-8 hidden md:flex md:mx-auto">Favorite Routes</h2>
      <section className="max-w-screen-lg mx-auto py-6">
        <TripItem/>
        <TripItem />
        <TripItem/>
        <TripItem/>
        <TripItem />
        <TripItem/>
        <TripItem />
        <TripItem />
        <TripItem/>
        <TripItem/>
      </section>
    </div>

  )
}

export default FavoriteRoutes;