import { DISH } from './dish'; //array DISH


// storing data here so to be shared to other parts of the program
export const dishes: DISH[] = [    //storing data here in form of array
    { 
        id: 1,
        name: "CARRIBEAN SAUCE",
        image: "../../assets/images/certificate.png",
        category: "INDIAN",
        price: 40,
        label: "VEG",
        description: "SWEET",
        featured: true,
        comments : [
            {
                rating: 5,
                comment: 'unique',
                author:'Adhiraj'
            }
        ],
  
    },
    { 
      id: 2,
      name: "MANGO",
      image: "../../assets/images/adhiraj.jpg",
      category: "SWEETFRUIT",
      price: 20,
      label: "VEG",
      description: "TASTY",
      featured: true,
      comments : [
        {
            rating: 3,
            comment: 'good',
            author:'KING BASH'
        }
      ]},
    {
            id: 3,
            name: "AN SUCE",
            image: "../../assets/images/certificate.png",
            category: "INDIAN",
            price: 40,
            label: "VEG",
            description: "SWEET",
            featured: true,
            comments : [
                {
                    rating: 5,
                    comment: 'unique',
                    author:'Adhiraj'
                }
            ]
    
    },
    { 
        id: 1,
        name: "CARRIBEAN SAUCE",
        image: "../../assets/images/certificate.png",
        category: "INDIAN",
        price: 40,
        label: "VEG",
        description: "SWEET",
        featured: true,
        comments : [
            {
                rating: 5,
                comment: 'unique',
                author:'Adhiraj'
            }
        ],
  
    },
    { 
      id: 2,
      name: "MANGO",
      image: "../../assets/images/adhiraj.jpg",
      category: "SWEETFRUIT",
      price: 20,
      label: "VEG",
      description: "TASTY",
      featured: true,
      comments : [
        {
            rating: 3,
            comment: 'good',
            author:'KING BASH'
        }
      ]},
    {
            id: 3,
            name: "AN SUCE",
            image: "../../assets/images/certificate.png",
            category: "INDIAN",
            price: 40,
            label: "VEG",
            description: "SWEET",
            featured: true,
            comments : [
                {
                    rating: 5,
                    comment: 'unique',
                    author:'Adhiraj'
                }
            ]
    
    }
  
];