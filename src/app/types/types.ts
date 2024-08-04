export interface dataSchemaType {
  filed: [
    {
      category: string
      partyName: string
      hashTags: {
        hashTag: string
      }[]
      dateData: {
        date: string
        dateTime: string
        week: string
      }[]
      personnel: Number
      picture: {
        url: string
      }[]
      summarize: string
      descriptions: {
        description: string
      }[]
      curriculum: {
        time: number
        act: string
      }[]
      announcements: {
        announcement: string
      }[]
      links: {
        link: string
      }[]
      contributions: {
        title: string
        contribute: []
      }[]
      price: {
        male: number
        female: number
        influencer: number
      }[]
    },
  ]
}

export const dataSchema: dataSchemaType = {
  filed: [
    {
      category: '',
      hashTags: [{ hashTag: '' }],
      partyName: '',
      dateData: [{ date: '', dateTime: '', week: '' }],
      personnel: 0,
      picture: [{ url: '' }],
      contributions: [{ title: '', contribute: [] }],
      summarize: '',
      descriptions: [{ description: '' }],
      curriculum: [{ time: 0, act: '' }],
      announcements: [{ announcement: '' }],
      links: [{ link: '' }],
      price: [{ male: 0, female: 0, influencer: 0 }],
    },
  ],
}
