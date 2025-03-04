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
            The Roble Foundations Programs aids an unheralded democracy in the horn of Africa to discover and build sustainable water wells in an effort maintain an proportionate agricultural yield to stave off famine, poverty, and economic decline.
          </p>
          <p>© 2025 The Roble Foundation All Rights Reserved.</p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">We’d love to connect with you!</p>
          <p>(703)777-6187</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer