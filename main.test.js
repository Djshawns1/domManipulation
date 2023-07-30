describe("startStopResetAnimation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="box"></div>
      <button class="start"></button>
      <button class="stop"></button>
      <button class="reset"></button>
    `;
  });

  it("should start the animation when the start button is clicked", () => {
    startAnimation();
    expect(box.classList.contains("spinAnimation")).toBe(true);
    expect(box.style.animationPlayState).toBe("running");
    expect(animationPaused).toBe(false);
  });

  it("should stop the animation when the stop button is clicked", () => {
    stopAnimation();
    expect(box.style.animationPlayState).toBe("paused");
    expect(animationPaused).toBe(true);
  });

  it("should reset the animation when the reset button is clicked", () => {
    resetAnimation();
    expect(box.classList.contains("spinAnimation")).toBe(false);
    expect(animationPaused).toBe(false);
  });
});

describe("copyAnimation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="body">
        <div class="cube"></div>
        <button class="addAnotherCube"></button>
      </div>
    `;
  });

  it("should copy the cube and append it to the body when the addAnotherCube button is clicked", () => {
    copyAnimation();
    const cubes = document.querySelectorAll(".cube");
    expect(cubes.length).toBe(2);
    expect(cubes[1].classList.contains("cube1")).toBe(true);
  });
});