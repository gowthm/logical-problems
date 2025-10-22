def reverseWords(s):
    s = s.split(" ");
    l = []
    
    for i in reversed(s):
        l.append(i)
        print(i);
        
    return " ".join(l)


s = "Blue and yellow perfect match";
print(reverseWords(s));

# Example 1:

# Input: s = "the sky is blue"
# Output: "blue is sky the"

# Example 2:

# Input: s = "  hello world  "
# Output: "world hello"

# Example 3:

# Input: s = "a good   example"
# Output: "example good a"