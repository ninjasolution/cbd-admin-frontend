export const inputFieldsInput = [
  {
    title: 'First Name',
    info:[
     {
      level: 'First Name',
      type: 'text',
      id: 'firstName'
     },
     {
      level: 'Last Name',
      type: 'text',
      id: 'lastName'
     }
    ],
  },
  {
    title: 'Email address',
    info:[
      {
        level: 'Email address',
        type: 'email',
        icon: 'true',
        id: 'email'
      },
      {
        level: 'Public nickname',
        type: 'text',
        icon: 'true',
        id: 'nickName'
      }
    ]
  },
  {
    title: 'Password',
    info:[
      {
        level: 'Password',
        type: 'password',
        id: 'currentPassword',
        icon: 'true'
      },
      {
        level: 'Retype password',
        type: 'password',
        icon: 'true',
        id: 'retypePassword'
      }
    ]
  },
  {
    title: 'Birthdate',
    info:[
      {
        level: 'Birthdate',
        type: 'date',
        id: 'birthday'
      },
      {
        level: 'Sponsor',
        type: 'text',
        icon: 'true',
        id: 'sponsor'
      }
      
    ]
  }
]