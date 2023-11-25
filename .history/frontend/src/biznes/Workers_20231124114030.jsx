import React, { useState } from 'react'
import AddWorker from "./AddWorker"
import MainButton from "../shared_np_buttony_inputy_kalendarze_itp/MainButton"
import Dropdown from "../shared_np_buttony_inputy_kalendarze_itp/Dropdown"
import Hairdresser from "../components/Hairdresser"
import { useEffect } from 'react';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    telephone: '213 123 123',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
]

const sortOptions = [
  { name: 'Zmień dane', href: '#', current: true },
  { name: 'Usuń pracownika', href: '#', current: true },
  { name: 'Dodaj nieobecność', href: '#', current: true }
]



export default function Workers() {
  const [isShown, setIsShown] = useState(0);
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7230/Salons/WorkersWithSalonId/1')
      .then((res) => res.json())
      .then((result) => {
        setSalons(result);
        console.log(result)
      });
  }, [])

  return (
    <>
        <div className="w-3/5 m-auto my-5 ">
            <ul role="list" className="divide-y divide-gray-100">
              {people.map((person) => (
                <li key={person.email} className="flex justify-between gap-x-6 py-5">
                  <Hairdresser person={person}/>
                  <Dropdown title="Edytuj" options={sortOptions}/>
                </li>
              ))}
            </ul>
            <span onClick={() => setIsShown(1)}>
              <MainButton text="Dodaj"/>
              </span>
            {isShown == 1 && <AddWorker setIsShown={setIsShown} />}
            {/*}{isShown == 2 && <AddService setIsShown={setIsShown} />}{*/}

        </div>
    </>
  )
}
