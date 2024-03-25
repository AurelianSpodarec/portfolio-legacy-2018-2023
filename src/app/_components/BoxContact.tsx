import Button from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";

function BoxContact() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="text-center">
        <h3>Fancy a chat?</h3>
        <p>Got a problem, idea or after some insight? Leave me a message and we'll be in touch</p>
      </div>

      <div className="grid grid-cols-2 max-w-5xl mx-auto">
        <div>
          <Input name="name" type="text" placeholder="Name" />
          <Input name="email" type="email" placeholder="Email" />
          <Input name="telephone" type="tel"placeholder="Tel No." />
        </div>
        <div>
          <textarea className="w-full" />
        </div>
      </div>

      <Button className="mx-auto text-center">SEND</Button>
    </section>
  )
}

export default BoxContact;
