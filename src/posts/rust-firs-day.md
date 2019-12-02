---
path: '/blog/rust-day-1'
date: '2019-12-02'
title: 'Rust - Day 1'
color: 'black'
tags: ['Rust', 'Development']
---

Rust is proving to be a productive tool for collaborating among large teams of developers with varying levels of systems programming knowledge.

Low-level code is prone to a variety of subtle bugs, which in most other languages can be caught only through extensive testing and careful code review by experienced developers. In Rust, the compiler plays a gatekeeper role by refusing to compile code with these elusive bugs, including concurrency bugs. By working alongside the compiler, the team can spend their time focusing on the program’s logic rather than chasing down bugs.

- Cargo, the included dependency manager and build tool, makes adding, compiling, and managing dependencies painless and consistent across the Rust ecosystem.
- Rustfmt ensures a consistent coding style across developers.
- The Rust Language Server powers Integrated Development Environment (IDE) integration for code completion and inline error messages.

## Rustup

rustup installs The Rust Programming Language from the official release channels,

- enabling you to easily switch between stable, beta, and nightly compilers and keep them updated.
- It makes cross-compiling simpler with binary builds of the standard library for common platforms. And it runs on all platforms Rust supports, including Windows.

---

    // create a file  with type rs.
    $ touch main.rs

    // put in some code
    fn main() {
        println!("Hello, world!");
    }

    // compile the code
    $ rustc main.rs

    // then it will generate an executable file, called main
    $ ./main

## Anatomy of a Rust Program

Inside the `main` function is the following code:

    println!("Hello, world!");

Second, `println!` calls a Rust macro.

If it called a function instead, it would be entered as `println` (without the `!`). We’ll discuss Rust macros in more detail in Chapter 19. For now, you just need to know that using a `!` means that you’re calling a macro instead of a normal function.

If you’re more familiar with a dynamic language, such as Ruby, Python, or JavaScript, you might not be used to compiling and running a program as separate steps.

Rust is an **_ahead-of-time compiled_** language, _meaning you can compile a program and give the executable to someone else, and they can run it even without having Rust installed_.

If you give someone a *.rb*, *.py*, or *.js* file, they need to have a Ruby, Python, or JavaScript implementation installed (respectively). But in those languages, you only need one command to compile and run your program. Everything is a trade-off in language design.

Just compiling with `rustc` is fine for simple programs, but as your project grows, you’ll want to manage all the options and make it easy to share your code. Next, we’ll introduce you to the Cargo tool, which will help you write real-world Rust programs.

---

## Cargo

This file is in the TOML (Tom’s Obvious, Minimal Language) format, which is Cargo’s configuration format.

```
cargo --version

$ cargo new hello_cargo
$ cd hello_cargo


$ cargo build
    Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 2.85 secs

$ ./target/debug/hello_cargo # or .\target\debug\hello_cargo.exe on Windows
Hello, world!

$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs
      Running `target/debug/hello_cargo`
Hello, world!

$ cargo check
    Checking hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs

```
