import inspect
import ipdb


class Interface(type):
    """A metaclass for creating interfaces."""

    def __instancecheck__(cls, instance):
        return cls.__subclasscheck__(type(instance))

    def __subclasscheck__(cls, subclass):
        subclass_methods = set(
            name
            for name, _ in inspect.getmembers(subclass, predicate=inspect.isfunction)
        )
        current_class_methods = set(
            name for name, _ in inspect.getmembers(cls, predicate=inspect.isfunction)
        )
        methods_check = current_class_methods.issubset(subclass_methods)

        base_class_check = any(issubclass(subclass, base) for base in cls.__bases__)

        return methods_check and base_class_check


def __test():
    print(f"Testing..")

    class Base:
        pass

    class TestInterface(Base, metaclass=Interface):
        """An interface for test classes."""

        def __init__(self, test_name):
            self.test_name = test_name

        def run(self):
            raise NotImplementedError

        def __call__(self):
            raise NotImplementedError

    class TestInterface2(metaclass=Interface):
        """An interface for test classes."""

        def __init__(self, test_name):
            self.test_name = test_name

        def run(self):
            raise NotImplementedError

        def __call__(self):
            raise NotImplementedError

    class TestWow:
        """An interface for test classes."""

        def __init__(self, test_name):
            self.test_name = test_name

        def run(self):
            raise NotImplementedError

        def __call__(self):
            raise NotImplementedError

    class TestSub0(Base):
        """A test class that implements the TestInterface."""

        def __init__(self, test_name):
            self.test_name = test_name

        def run(self):
            print("Running test {}".format(self.test_name))

        def __call__(self):
            print("Calling test {}".format(self.test_name))

    class TestSub1:
        """A test class that implements the TestInterface."""

        def __init__(self, test_name):
            self.test_name = test_name

        def run(self):
            print("Running test {}".format(self.test_name))

        def __call__(self):
            print("Calling test {}".format(self.test_name))

    class TestSub2:
        """A test class that implements the TestInterface."""

        def __init__(self, test_name):
            self.test_name = test_name

        def run(self):
            print("Running test {}".format(self.test_name))

    class TestSub3:
        """A test class that implements the TestInterface."""

        def __init__(self, test_name):
            self.test_name = test_name

    # Test that TestSub implements TestInterface
    assert issubclass(TestSub0, TestInterface)
    assert issubclass(TestWow, TestInterface2)
    assert not issubclass(TestSub1, TestInterface)
    # print(isinstance(TestSub("test"), TestInterface))

    # Test that TestSub2 does not implement TestInterface
    assert not (issubclass(TestSub2, TestInterface))
    # print(isinstance(TestSub2("test"), TestInterface))
    assert not (issubclass(TestSub3, TestInterface))

    print(f"Tests passed ")


if __name__ == "__main__":
    __test()
