import React from 'react'

function Pr() {
  return (
    <>

<fieldset className="flex flex-wrap gap-3">
  <legend className="sr-only">Color</legend>

  <div>
    <label
      htmlFor="ColorBlack"
      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
    >
      <input
        type="radio"
        name="ColorOption"
        value="ColorBlack"
        id="ColorBlack"
        className="sr-only"
        checked
      />

      <p className="text-sm font-medium">Texas Tea</p>
    </label>
  </div>

  <div>
    <label
      htmlFor="ColorRed"
      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
    >
      <input type="radio" name="ColorOption" value="ColorRed" id="ColorRed" className="sr-only" />

      <p className="text-sm font-medium">Fiesta Red</p>
    </label>
  </div>

  <div>
    <label
      htmlFor="ColorBlue"
      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
    >
      <input type="radio" name="ColorOption" value="ColorBlue" id="ColorBlue" className="sr-only" />

      <p className="text-sm font-medium">Cobalt Blue</p>
    </label>
  </div>

  <div>
    <label
      htmlFor="ColorGold"
      className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
    >
      <input type="radio" name="ColorOption" value="ColorGold" id="ColorGold" className="sr-only" />

      <p className="text-sm font-medium">Goldtop</p>
    </label>
  </div>
</fieldset>    </>
  )
}

export default Pr