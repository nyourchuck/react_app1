import Card from './Card.tsx'

interface UserProps {
  name: string;
}

export default function User({name}: UserProps) {
    return(
      <>
        <h1 className="underline">{name}</h1>
        <div>
            <Card value="0"/>
            <Card value="1"/>
            <Card value="2"/>
            <Card value="3"/>
            <Card value="5"/>
            <Card value="8"/>
        </div>
      </>
      );
  }
