"use client"
import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        residence: ""
    })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="md:bg-cover bg-contain bg-center bg-no-repeat min-h-94.5"
          style={{ backgroundImage: "url('/contact-image.png')" }}
        ></div>
        <Card>
          <CardContent className="space-y-10">
            <h2 className="md:text-3xl text-xl font-bold text-center">
              Have Question? <br /> Get in{" "}
              <span className="text-primary!">touch!</span>
            </h2>
            <div className="space-y-10">
              <Field>
                <FieldLabel htmlFor="name">Your name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="rounded-full py-6"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="mail"
                  placeholder="Enter account mail"
                  className="rounded-full py-6"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="residence">Residence</FieldLabel>
                <Input
                  id="residence"
                  name="residence"
                  placeholder="Enter your address"
                  className="rounded-full py-6"
                  required
                  value={formData.residence}
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <Button className="py-6 px-10.5 rounded-full mx-auto ">
                  Submit
                </Button>
              </Field>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact
