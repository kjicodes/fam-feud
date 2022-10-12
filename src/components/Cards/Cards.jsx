import Card from '../Card/Card';

export default function Cards(props) {
  return (
    <div className="Cards">
      <Card isPicked={false} />
      <Card isPicked={false} />
      <Card isPicked={false} />
      <Card isPicked={false} />
      <Card isPicked={false} />
    </div>
  )
}
