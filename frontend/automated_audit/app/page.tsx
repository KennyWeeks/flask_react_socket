import Image from 'next/image'
import Menu from "./manu";
import Connector from  "./socket_connector";

export default function Home() {

  return (
    <div className="w-100 h-[100vh] bg-red-100">
      <Menu></Menu>
      <Connector></Connector>
    </div>
  )
}
