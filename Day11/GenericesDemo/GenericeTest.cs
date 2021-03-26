using System;
using System.Collections.Generic;
using System.Text;

namespace GenericesDemo
{
    public class GenericeTest<T>
    {
        T[] ob = new T[5];

        int count = 0;


        public void Add(T item) {

            if (count + 1 < 6) {

                ob[count] = item;

            }
            count++;
        
        }

        public T this[int index]
        {
            get { return ob[index]; }
            set { ob[index] = value; }
        }

    }
}
