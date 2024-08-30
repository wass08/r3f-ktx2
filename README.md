# Optimize GLB models and textures

![video thumbnail](https://github.com/user-attachments/assets/eb7a4614-924b-4936-a63e-1196c3241360)

[Video tutorial](https://youtu.be/Wt3iEenj_Xw)

## Diagnose

Use [gltf-report](https://gltf.report/) to diagnose your GLB models and textures.

## Convert GLB model textures to KTX2

Install [gltf-transform](https://gltf-transform.dev/cli)

```bash
npm install --global @gltf-transform/cli
```

Transform textures found in a GLB model to KTX2 format with [gltf-transform](https://gltf-transform.dev/cli):

```bash
gltf-transform uastc [INPUT] [OUTPUT]
```

Optimize the whole GLB and transform textures to KTX2 format with [gltf-transform](https://gltf-transform.dev/cli):

```bash
gltf-transform optimize [INPUT] [OUTPUT] --texture-compress ktx2
```

## Transform images to KTX2 texture

Install [KTX-Software](https://github.com/KhronosGroup/KTX-Software/releases).

KTX Creation with [toktx](https://github.khronos.org/KTX-Software/ktxtools/toktx.html):

```bash
toktx --t2 --genmipmap --upper_left_maps_to_s0t0 public/images/cards_atlas.ktx2 public/images/cards_atlas.jpg
```

Encode and compress KTX2 texture to UASTC with [ktxsc](https://github.khronos.org/KTX-Software/ktxtools/ktxsc.html):

```bash
ktxsc --encode uastc  --zcmp 19 -o public/images/cards_atlas_uastc.ktx2  public/images/cards_atlas.ktx2
```

## GLB Optimizer

Use [GLB Optimizer](https://glb.babylonpress.org/), an online tool leveraging glt-transform CLI to optimize GLB models without using the command line.
