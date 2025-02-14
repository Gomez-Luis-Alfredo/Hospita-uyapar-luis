import img from '../assets/img/about.jpg'

export default function About() {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5'>
        <div className='w-full lg:w-4/5 space-y-4'>
            <h1 className='text-4xl font-semibold text-center lg:text-start'>About us</h1>
        
        <p className='text-justify lg:text-start'>
        orem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
  labore rerum tempore tenetur commodi natus quos itaque voluptatum
  repudiandae nostrum accusantium vero voluptate aspernatur totam,
  laboriosam aut, et quae consequatur?
        </p>
        <p className='text-justify lg:text-start'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
  suscipit illum, numquam incidunt nostrum dolor officia doloremque
  cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
  Dolor, minus reiciendis.
        </p>
        <p className='text-justify lg:text-start'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
  Accusantium ab expedita veniam nobis aut, in rerum repellendus!
  Exercitationem libero recusandae corrupti accusantium reiciendis in
  placeat illo maxime ea.
        </p>
        </div>
        <div className='w-full lg:w-3/5'>
            <img src={img} alt="about" className='rounded-lg' />
        </div>
        
    </div>
  )
}
