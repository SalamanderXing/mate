from setuptools import setup, find_packages
import os

# Generate requirements.txt, using pipreqs, saving the file in current directory
os.system("pipreqs --force packages/mate --savepath requirements.txt --ignore docker")

with open("requirements.txt") as f:
    requirements = f.read().splitlines()

setup(
    name="mate",
    description="📦 Modularize your deep learning project to improve reproducibility",
    author="Giulio Zani",
    author_email="giulio.zani@gmail.com",
    url="https://github.com/SalamanderXing/mate",
    python_requires=">=3.8",
    packages=find_packages("packages", exclude=["tests"]),
    include_package_data=True,
    package_dir={"": "packages/"},
    license="Apache License 2.0",
    license_files=("LICENSE.md",),
    version="0.0.1",
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
