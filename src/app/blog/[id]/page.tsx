import { data } from '@/data';
import { Card } from 'antd';

interface IdParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IdParams) {
  const item = data.find((item) => item.id === +params.id)!;
  return {
    title: item.title,
  };
}

export default function Page({ params }: IdParams) {
  const item = data.find((item) => item.id === +params.id)!;
  return (
    <Card title={item?.title}>
      <p>{item?.body}</p>
    </Card>
  );
}
