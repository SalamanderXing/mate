from setuptools import setup, find_packages

with open("requirements.txt") as f:
    requirements = f.read().splitlines()

setup(
    name="yerbamate",
    description="📦 Modularize your deep learning project to improve reproducibility",
    author="Giulio Zani",
    author_email="giulio.zani@gmail.com",
    url="https://github.com/SalamanderXing/mate",
    python_requires=">=3.10",
    version="0.9",
    packages=find_packages("packages", exclude=["tests"]),
    include_package_data=True,
    package_dir={"": "packages/"},
    license="Apache License 2.0",
    license_files=("LICENSE.md",),
    install_requires=requirements,
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Console",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
    ],
    scripts=["./src/mate", "./src/mateboard"],
)
