export default function handler(req, res) {

  const videos = [
    {
      id: '1DD2312',
      title: '午後時光',
      search: 'summer',
      author: 'Joyce',
      publishTime: '2012/4/12'
    },
    {
      id: '12D2I22',
      title: '午後時光1',
      search: 'afternoon',
      author: 'Joyce',
      publishTime: '2013/4/12'
    },
    {
      id: '233ETY3',
      title: '午後時光2',
      search: 'time',
      author: 'Joyce',
      publishTime: '2016/4/12'
    },
    {
      id: 'PQER122',
      title: '夏日棕熊',
      search: 'bear',
      author: 'Kelly',
      publishTime: '1999/4/12'
    },
    {
      id: 'K!@#566',
      title: '向日葵的秋天',
      search: 'sunflower',
      author: 'Sean',
      publishTime: '2222/4/12'
    },
  ]
  return res.status(200).json(videos)
}