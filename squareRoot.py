'''

Given a real number n, find the square root of n. For example, given n = 9, return 3.


'''



def main():
    ''' the main routine '''    
    n = input('enter a number: ')
    answer = squareRoot(n)
    print(answer)


def squareRoot(n):
    ''' square root of a number by iteration 
    
    parameters:
        n: number to find square root of

    return:
        nOut: the square root of n
    '''

    n = float(n)
    # make a logical start guess
    guess = 0.1 * n

    for i in range(20):
        # do process 100 times
        if guess*guess > n:
            print(f'{guess} is too large {i}')
            guess = 0.9*guess
        elif guess*guess < n:
            print(f'{guess} is to small {i}')
            guess = 1.1*guess
        else:
            print(f'{guess} is correct {i}')
            return guess
        
    print('...second batch working...')
    for i in range(20):
        # do process 100 times
        if guess*guess > n:
            print(f'{guess} is too large')
            guess = 0.99*guess
        elif guess*guess < n:
            print(f'{guess} is to small')
            guess = 1.01*guess
        else:
            print(f'{guess} is correct')
            return guess

    print('...third batch working...')
    for i in range(20):
        # do process 100 times
        if guess*guess > n:
            print(f'{guess} is too large')
            guess = 0.999*guess
        elif guess*guess < n:
            print(f'{guess} is to small')
            guess = 1.001*guess
        else:
            print(f'{guess} is correct')
            return guess


    return guess



if __name__ == "__main__":
    main()
    pass