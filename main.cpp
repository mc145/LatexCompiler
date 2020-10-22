#include<iostream>
#include<math.h> 


using namespace std; 

int gcd(int a, int b) {
   if (b == 0)
   return a;
   return gcd(b, a % b);
}
int main(){ 
    for(int a = 1; a<=100; a++){
        for(int b = 1; b<=100; b++){
            for(int c=  1; c<=100; c++){
                int abc = gcd(a*b, c); 
                int ac = gcd(a, c); 
                int bc = gcd(b, c); 
                int ab = gcd(a,b); 
                if(abc != ac*bc/ab){
                    cout << a << " " << b << " " << c << endl; 
                }
            }
        }
    }
}