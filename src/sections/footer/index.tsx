import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <h1 className={`text-2xl font-mono font-semibold`}>
            The Roble Foundation 
          </h1>
          <p className="my-5">
            The Roble Foundation empowers a growing democracy in the Horn of Africa by building sustainable water wells, enhancing agricultural stability, and fostering prosperity, growth, and resilience.
          </p>
          <p>© 2025 The Roble Foundation All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">We’d love to connect with you!</p>
          
          <p>(703) 777-6187</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Address:</h4>
          <p>Roble Foundation</p>
          <p>C/O Gordon Caylor, CPA</p>
          <p>44115 Woodridge Pkwy - Suite 100</p>
          <p>Lansdowne, VA 20176</p>
        </div>

        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer