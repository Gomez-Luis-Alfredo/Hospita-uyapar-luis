

export default function Button({title}) {
  return (
    <div>
        <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-out ">
           {title}
        </button>
    </div>
  )
}
