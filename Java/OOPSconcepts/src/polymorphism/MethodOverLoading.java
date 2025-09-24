package polymorphism;

class Addition {
	public void add(int a, int b) {
		System.out.println(a + b);
	}

	public void add(double a, double b) {
		System.out.println(a + b);
	}
}

public class MethodOverLoading {
	public static void main(String[] args) {
		Addition a1 = new Addition();
		a1.add(27, 97);
		a1.add(27.97, 10.05);
	}
}