
public class Solution {

    public final int LETTERS_IN_ALPHABET = 26;
    public Letter[] frequency;

    public int firstUniqChar(String s) {
        initializeArrayFrequency();
        recordFrequency(s);
        return indexFirstUniqueLettetr(s.length());
    }

    public void initializeArrayFrequency() {
        frequency = new Letter[LETTERS_IN_ALPHABET];
        for (int i = 0; i < LETTERS_IN_ALPHABET; i++) {
            frequency[i] = new Letter();
        }
    }

    public void recordFrequency(String s) {
        int n = s.length() - 1;
        for (int i = n; i >= 0; i--) {
            int index = s.charAt(i) - 'a';
            frequency[index].frequency++;
            frequency[index].index = i;
        }
    }

    public int indexFirstUniqueLettetr(int stringLength) {
        int index = stringLength;
        for (int i = 0; i < LETTERS_IN_ALPHABET; i++) {
            if (frequency[i].frequency == 1) {
                index = Math.min(index, frequency[i].index);
            }
        }
        return index == stringLength ? -1 : index;
    }
}

class Letter {

    int frequency;
    int index = -1;
}
