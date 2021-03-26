using System;

namespace GenericesDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            GenericeTest<int> intobj = new GenericeTest<int>();
            intobj.Add(121);
            intobj.Add(122);
            intobj.Add(100);
            intobj.Add(18);
            intobj.Add(22);
            

            GenericeTest<Message> message = new GenericeTest<Message>();
            message.Add(new Message {
            sender = "Neetika",
            content ="Hello Friend",
            reciver ="Arpit"
            });
            message.Add(new Message
            {
                sender = "Abhishek",
                content = "Hello Friend",
                reciver = "Deep"
            });
            message.Add(new Message
            {
                sender = "Sumya",
                content = "Hello Friend",
                reciver = "Sunil"
            });

            for (int i = 0; i < 5; i++) {

                Console.WriteLine(intobj[i]);
                Console.WriteLine(message[i]);
            }

            Message a = new Message
            {
                sender = "Sumya",
                content = "Hello Friend",
                reciver = "Sunil"
            };
            Message b = new Message
            {
                sender = "Abhishek",

                content = "Hello Friend",
                reciver = "Neetika"
            };

            Console.WriteLine($"Before Sawping : A = {a}  B = {b}" );
            Swap<Message>(ref a,ref b);
            Console.WriteLine($"After Sawping : A = {a}  B = {b}");


            static void Swap<message>(ref message a , ref message b) {
                message temp;
                temp = a;
                a = b;
                b = temp;

            }


        }

       
    }
}
