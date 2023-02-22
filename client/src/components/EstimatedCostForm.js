import React from 'react';

export default function EstimatedCostForm() {
  return (
    <form>
        <label>Vendor Name:
            <input type="text"/>
        </label>
        <label>Cost:
            <input type="text"/>
        </label>
        <button type="submit">+</button>
    </form>
  )
}
