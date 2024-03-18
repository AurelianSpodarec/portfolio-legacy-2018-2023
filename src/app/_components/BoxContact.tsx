import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

function BoxContact() {
  return (
    <section>
      <div>
        <h3>Fancy a chat?</h3>
        <p>Got a problem, idea or after some insight? Leave me a message and we'll be in touch</p>
      </div>

      <div>
        <div>
          <Input />
          <Input />
          <Input />
        </div>
        <div>
          textarea
        </div>
      </div>

      <Button>SEND</Button>
    </section>
  )
}

export default BoxContact;
