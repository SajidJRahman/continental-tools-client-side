import React from 'react';
import './Blogs.css';
import Title from '../Shared/Title/Title';

const Blogs = () => {
    return (
        <div className='font-poppins mt-10 mx-5'>
            <Title title="Blogs" />
            <h1 className='text-3xl lg:text-4xl font-bold text-center mb-2'>Blogs</h1>
            <p className='text-center mb-12 font-medium lg:font-semibold'>Blogs question about JavaScript & React</p>
            <div className='w-full lg:w-1/2 bg-gradient-to-t from-[#5ba8ff] to-[#afdffc] text-center mx-auto my-5 lg:my-10 p-8 lg:p-16 shadow-xl rounded-3xl'>
                <h1 className='mb-5 text-2xl lg:text-3xl font-bold '>How will I improve the performance of a React Application?</h1>
                <p>There are some key important steps to improve the performance. First, we need to keep component state local where necessary. Second, optimizing all the images we use around our website, reducing the file size. Third, we can use dependencies inside <code>useEffect()</code> hook. Fourth, we can avoid using over-rendering unnecessary features. And fifth, using arrow function to preserve the context of the execution</p>
            </div>
            <div className='w-full lg:w-1/2 bg-gradient-to-t from-[#5ba8ff] to-[#afdffc] text-center mx-auto my-5 lg:my-10 p-8 lg:p-16 shadow-xl rounded-3xl'>
                <h1 className='mb-5 text-2xl lg:text-3xl font-bold '>What are the different ways to manage a state in a React Application?</h1>
                <p>There are four types of state we need to manage state in a React Application, 1: Local State, 2: Global State, 3: Server State & 4: URL State. Number one, Local State is data we manage data in our component, it is most often managed by using the <code>useState()</code> hook. Number two, Global State is data we manage over multiple components. Number three, Server state data comes from an external server, Server state can be hard to manage around states, but we got React Query which make managing server state very easier. And number four, URL State data is a data, that exists on URL, like pathname and query parameters.</p>
            </div>
            <div className='w-full lg:w-1/2 bg-gradient-to-t from-[#5ba8ff] to-[#afdffc] text-center mx-auto my-5 lg:my-10 p-8 lg:p-16 shadow-xl rounded-3xl'>
                <h1 className='mb-5 text-2xl lg:text-3xl font-bold '>How does prototypical inheritance work?</h1>
                <p>Prototypical Inheritance is ability to access object properties from another object. In JavaScript, objects have a special hidden property named [[Prototype]], which is either null or it references another object. That object is called a Prototype. If we try to read a property from object, & the property is not defined, JavaScript automatically takes it from this prototype mentioned above. It is called the Prototypal Inheritance. Or being said easily, property that being shared from one object to another object works using a chain.</p>
            </div>
            <div className='w-full lg:w-1/2 bg-gradient-to-t from-[#5ba8ff] to-[#afdffc] text-center mx-auto my-5 lg:my-10 p-8 lg:p-16 shadow-xl rounded-3xl'>
                <h1 className='mb-5 text-2xl lg:text-3xl font-bold '>Why do I not set the state directly in React?</h1>
                <p>I shouldn't set the state in React directly because of a couple of reasons. First if I set the state directly & call the setState(), it may just replace the update that I made. Whenever I set the state directly, it does not change this.state() instantly, it just creates a pending state alteration, & accessing it after calling this method will only return the present value of the state. I should never set state directly because I will lose control of the state over all components.</p>
            </div>
            <div className='w-full lg:w-1/2 bg-gradient-to-t from-[#5ba8ff] to-[#afdffc] text-center mx-auto my-5 lg:my-10 p-8 lg:p-16 shadow-xl rounded-3xl'>
                <h1 className='mb-5 text-2xl lg:text-3xl font-bold '>How will I implement search to find an array of products that includes object with properties?</h1>
                <p>There are some methods that I can use to implement search to find properties inside an array of object. First I can use the <code>find()</code> method like <br /><code>const search = what ={'>'} array.find(element ={'>'} element.name === what);</code><br /> And to check if the item was found or not: <br /><code>const found = search('product');</code><br /><code>console.log(search);</code> at the end. I can also use <code>filter()</code> method like <br />0<code>var foundValue = array.filter(obj ={'>'} obj.name === 'product');</code> & then <br /><code>console.log(foundValue)</code> to see the result.
                </p>
            </div>
            <div className='w-full lg:w-1/2 bg-gradient-to-t from-[#5ba8ff] to-[#afdffc] text-center mx-auto my-5 lg:my-10 p-8 lg:p-16 shadow-xl rounded-3xl'>
                <h1 className='mb-5 text-2xl lg:text-3xl font-bold '>What is a unit test? Why should I write unit tests?</h1>
                <p>Unit testing is a testing method. It is a method where each component of an app are tested. It makes code to meet quality standards before it's deployed. It reduces the cost of bug fixing, making an app more performant & energy efficient. Unit test simplifies the debugging process, it ensures that every system component benefits to achieving a good quality application. Each modules of an app in unit test get isolated from one another & have their own area of responsibility, making the code of an app more reliable. At a conclusion, I should write unit tests to make my app work correctly & to detect bugs more easily.</p>
            </div>

        </div>
    );
};

export default Blogs;