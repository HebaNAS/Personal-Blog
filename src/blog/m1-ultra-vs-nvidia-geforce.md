---
title: M1 Ultra vs. NVIDIA GeForce RTX 2070 Super 🤔
author: Heba
date: 2022-06-01
thumbnail: "../../static/images/blog/mac_studio.jpeg"
---

<img class="main-img" src="../../static/images/blog/mac_studio.jpeg" alt="Mac Studio M1 Ultra" />
<p class="is-size-6 has-text-centered">Image Credit: Peng Original at Unsplash</p>

<br/>
<br/>
  
So I bought the maxed out Mac Studio with the blazingly fast M1 Ultra Chip from Apple with 20-Core CPU, 64-Core GPU and 128GB of RAM. As stoked as I am with this machine, it's time to find out is it any good for my work on Deep Learning compared to my previous Power House, the NVIDIA GeForce RTX 2070 Super with 8GB of VRAM and 2560 CUDA Cores.

<br/>
<br/>

## The Setup for Testing

<br/>

First, as a PyTorch user mainly, I waited for the framework to support the M1 architecture. Finally they did and there is a "nightly" version available to work on new M1 Macs and that can leverage the CPU as well as the GPU power of these new machines. <em class="has-text-danger">If you read this much later than May 2022, then most probably a stable version has been released and you should download and work with that.</em>

<br/>
1. Create an environment before you start setting up your space. I used this command for creating that:<br/>

<span class="is-size-5">```conda create -n CHOOSE_AN_ENV_NAME python=3.8```</span>

<br/>
Then, activate the environment:<br/>
<span class="is-size-5">```conda activate YOUR_CHOSEN_ENV_NAME```</span>
<br/>
<br/>
2. Head to: <a href="https://pytorch.org/get-started/locally/">https://pytorch.org/get-started/locally/</a> to download the latest version of PyTorch.

For the MacOS, I chose the following:
<br/>
<div class="is-family-monospace is-size-5 notification is-info is-light p-4">
<strong>PyTorch Build: Preview (Nightly)<br/>
Your OS: Mac<br/>
Package: Pip<br/>
Langauge: Python<br/>
Compute Platform: Default<br/>
Copy the given command, paste and run it in the terminal.</strong>
</div>

For the Windows, I used the following:
<br/>
<div class="is-family-monospace is-size-5 notification is-info is-light p-4">
<strong>PyTorch Build: Stable<br/>
Your OS: Windows<br/>
Package: Pip<br/>
Langauge: Python<br/>
Compute Platform: CUDA 11.x<br/>
Copy the given command, paste and run it in the terminal.</strong>
</div>

<br/>
3. Download PyTorch's repo of examples found at: <a href="https://github.com/pytorch/examples">https://github.com/pytorch/examples</a>. This contains a few models built by PyTorch team that I found a good way to test my machines and do the benchmarking without the overload of building these myself.

<br/>
<br/>
4. Inside the cloned repo, there are several examples and there is a `run_python_examples.sh` script that automates the tests. This script detects CUDA on Windows machines and uses it when available, so the script is handy. However, I only used it as a guide for running the python commands but for my experiments here, I manually ran the training scripts inside selected folders mainly because the scripts inside do not support MPS acceleration which is the like of CUDA but on the M1 chip, i.e., allows training on the GPU on the M1 Ultra.

<br/>
<br/>
<hr/>
<br/>

## Experiment 1: Deep Convolution Generative Adversarial Networks

<br/>
I ran the following on both machines:

<div class="is-size-6 has-background-black-ter">

```shell
pip install lmdb # From requirements.txt
```
</div>

<div class="is-size-6 has-background-black-ter">

```shell
git clone https://github.com/fyu/lsun # Clone the dataset
```
</div>

<div class="is-size-6 has-background-black-ter">

```shell
cd lsun
python download.py -c classroom -o data # Download one category only and save it into data folder
unzip classroom_train_lmdb.zip
```

</div>

<div class="is-size-6 has-background-black-ter">

```shell
cd ../dcgan
```

</div>
<br/>
<span class="has-text-danger">Note:</span><br/>

I do not install the packages in `requirements.txt` as is on the MacOS; this will install a stable torch version that does not support MPS, which is not what I needed. So I manually installed packages in the requirements file other than `torch`, `torchvision` and `torchaudio`.

<br/>

On the MacOS, I did the follwing changes in ```main.py```

<div class="is-size-6 has-background-black-ter">

```diff
# To avoid an error if number of workers is > 0
-parser.add_argument('--workers', type=int, help='number of data loading workers', default=2)
+parser.add_argument('--workers', type=int, help='number of data loading workers', default=0)
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Change CUDA flag to mps
-parser.add_argument('--cuda', action='store_true', help='enables cuda')
+parser.add_argument('--mps', action='store_true', help='enables mps')
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Check if M1 GPU acceleration is supported
-if torch.cuda.is_available():
-    print("WARNING: You have a CUDA device, so you should probably run with --cuda")
+if torch.backends.mps.is_available():
+    print("WARNING: You have a MPS device, so you should probably run with --mps")
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Let script use M1's GPU acceleration
-device = torch.device("cuda:0" if opt.cuda else "cpu")
+device = torch.device("mps" if opt.mps else "cpu")
```

</div>


On both machines I added the following in ```main.py``` to log the time:

<div class="is-size-6 has-background-black-ter">

```diff
# Add time package in imports
+from time import time
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
for epoch in range(opt.niter):
+    t0 = time()
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
torch.save(netD.state_dict(), '%s/netD_epoch_%d.pth' % (opt.outf, epoch))

+    print(f'Duration for 1 Epoch: {time() - t0:.3f} seconds')
```

</div>

<br/>
----<br/>
<strong class="is-size-3 has-text-light">Results 🥁🥁:</strong>

<br/>
<table class="table mt-5 is-striped is-size-4">
    <thead>
        <tr>
            <td>Chip</td>
            <td>Batch size</td>
            <td>Image size</td>
            <td>Time</td>
            <td>Temperature</td>
            <td>Memory</td>
            <td>Power</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>M1 Ultra CPU</strong></td>
            <td>64</td>
            <td>64</td>
            <td>1942.078 s</td>
            <td>47ºC</td>
            <td>&lt;0.3GB</td>
            <td>~35W</td>
        </tr>
        <tr>
            <td></td>
            <td>1024</td>
            <td>64</td>
            <td>1684.591 s</td>
            <td>45ºC</td>
            <td>&lt;1.3GB</td>
            <td>~35W</td>
        </tr>
        <tr>
            <td><strong>M1 Ultra GPU</strong></td>
            <td>64</td>
            <td>64</td>
            <td>Runtime error (Bug)</td>
            <td>43ºC</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td></td>
            <td>1024</td>
            <td>64</td>
            <td>Runtime error (Bug)</td>
            <td>42ºC</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td><strong>2070 Super CUDA</strong></td>
            <td>64</td>
            <td>64</td>
            <td><strong>285.473 s</strong></td>
            <td>48ºC</td>
            <td>1.3GB</td>
            <td>~84W</td>
        </tr>
        <tr>
            <td></td>
            <td>1024</td>
            <td>64</td>
            <td><strong>252.657 s</strong></td>
            <td>54ºC</td>
            <td>4.45GB</td>
            <td>~69W</td>
        </tr>
    </tbody>
</table>

<br/>
<br/>
<hr/>
<br/>

## Experiment 2: Siamese Convolutional Neural Networks

<br/>
<br/>
I ran the following on both machines:

<div class="is-size-6 has-background-black-ter">

```shell
cd ../siamese_network
```

</div>
<br/>

On the MacOS, I did the follwing changes in ```main.py```

<div class="is-size-6 has-background-black-ter">

```diff
# To avoid an error if number of workers is > 0
-    parser.add_argument('--no-cuda', action='store_true', default=False,
-                        help='disables CUDA training')
+    parser.add_argument('--no-mps', action='store_true', default=False,
+                        help='disables MPS training')
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Change CUDA flag to mps
-use_cuda = not args.no_cuda and torch.cuda.is_available()
+use_mps = not args.no_mps and torch.backends.mps.is_available()
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Check if M1 GPU acceleration is supported
-device = torch.device("cuda" if use_mps else "cpu")
+device = torch.device("mps" if use_mps else "cpu")
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Let script use M1's GPU acceleration
-if use_cuda:
-        cuda_kwargs = {'num_workers': 0,
-                       'pin_memory': True,
-                       'shuffle': True}
-        train_kwargs.update(cuda_kwargs)
-        test_kwargs.update(cuda_kwargs)
+if use_mps:
+        mps_kwargs = {'num_workers': 0,
+                       'shuffle': True}
+        train_kwargs.update(mps_kwargs)
+        test_kwargs.update(mps_kwargs)
```

</div>


On both machines I added the following in ```main.py``` to log the time:

<div class="is-size-6 has-background-black-ter">

```diff
# Add time package in imports
+from time import time
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
def train(args, model, device, train_loader, optimizer, epoch):
+    t0 = time()
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
            if args.dry_run:
                break

+    print(f'Duration for 1 Epoch: {time() - t0:.3f} seconds')
```

</div>

<br/>
----<br/>
<strong class="is-size-3 has-text-light">Results 🤓:</strong>

<br/>
<table class="table mt-5 is-striped is-size-4">
    <thead>
        <tr>
            <td>Chip</td>
            <td>Batch size</td>
            <td>Time</td>
            <td>Temperature</td>
            <td>Memory</td>
            <td>Power</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>M1 Ultra CPU</strong></td>
            <td>64</td>
            <td>353.208 s</td>
            <td>47ºC</td>
            <td>&lt;0.4GB</td>
            <td>~35W</td>
        </tr>
        <tr>
            <td></td>
            <td>1024</td>
            <td>197.937 s</td>
            <td>51ºC</td>
            <td>&lt;0.5GB</td>
            <td>~38W</td>
        </tr>
        <tr>
            <td><strong>M1 Ultra GPU</strong></td>
            <td>64</td>
            <td>112.131 s</td>
            <td>47ºC</td>
            <td>1.42GB</td>
            <td>~38W</td>
        </tr>
        <tr>
            <td></td>
            <td>1024</td>
            <td><strong>15.547 s</strong></td>
            <td>47ºC</td>
            <td>3.21GB</td>
            <td>~38W</td>
        </tr>
        <tr>
            <td><strong>2070 Super CUDA</strong></td>
            <td>64</td>
            <td><strong>39.839 s</strong></td>
            <td>55ºC</td>
            <td>1.3GB</td>
            <td>~182W</td>
        </tr>
        <tr>
            <td></td>
            <td>1024</td>
            <td>20.538 s</td>
            <td>51ºC</td>
            <td>2.4GB</td>
            <td>~189W</td>
        </tr>
    </tbody>
</table>

<br/>
<hr/>
<br/>

## Experiment 3: Transofrmer for Word-level Language Modeling

<br/>
<br/>
I ran the following on both machines:

<div class="is-size-6 has-background-black-ter">

```shell
cd ../word_language_model
```

</div>
<br/>

On the MacOS, I did the follwing changes in ```main.py```

<div class="is-size-6 has-background-black-ter">

```diff
# To avoid an error if number of workers is > 0
-    parser.add_argument('--no-cuda', action='store_true', default=False,
-                        help='disables CUDA training')
+    parser.add_argument('--no-mps', action='store_true', default=False,
+                        help='disables MPS training')
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Change CUDA flag to mps
-args.cuda = not args.cuda and torch.cuda.is_available()
+args.mps = not args.no_mps and torch.backends.mps.is_available()
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Check if M1 GPU acceleration is supported
-device = torch.device("cuda" if use_mps else "cpu")
+device = torch.device("mps" if use_mps else "cpu")
```

</div>

<br/>
----<br/>
<strong class="is-size-3 has-text-light">Results 🧐 (Pushing to the limits):</strong>

<br/>
<table class="table mt-5 is-striped is-size-6">
    <thead>
        <tr>
            <td>Chip</td>
            <td>Model</td>
            <td>Batch size</td>
            <td>Word Embeddings size</td>
            <td>No. of Layers</td>
            <td>Hidden Units/Layer</td>
            <td>Time</td>
            <td>Temperature</td>
            <td>Memory</td>
            <td>Power</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>M1 Ultra CPU</strong></td>
            <td>Transformer</td>
            <td>20</td>
            <td>200</td>
            <td>2</td>
            <td>200</td>
            <td>282.73 s</td>
            <td>53ºC</td>
            <td>&lt;0.3GB</td>
            <td>~43W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>20</td>
            <td>500</td>
            <td>2</td>
            <td>500</td>
            <td>405.90 s</td>
            <td>49ºC</td>
            <td>&lt;0.5GB</td>
            <td>~44W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>4</td>
            <td>500</td>
            <td>362.12 s</td>
            <td>52ºC</td>
            <td>1.6GB</td>
            <td>~50W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>6</td>
            <td>1024</td>
            <td>513.85 s</td>
            <td>51ºC</td>
            <td>2.4GB</td>
            <td>~44W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>10</td>
            <td>1024</td>
            <td>745.80 s</td>
            <td>51ºC</td>
            <td>2.4GB</td>
            <td>~50W</td>
        </tr>
        <tr>
            <td><strong>M1 Ultra GPU</strong></td>
            <td>Transformer</td>
            <td>20</td>
            <td>200</td>
            <td>2</td>
            <td>200</td>
            <td>505.52 s</td>
            <td>48ºC</td>
            <td>&lt;2.4GB</td>
            <td>~40W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>20</td>
            <td>500</td>
            <td>2</td>
            <td>500</td>
            <td>502.79 s</td>
            <td>48ºC</td>
            <td>4.8GB</td>
            <td>~40W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>4</td>
            <td>500</td>
            <td>104.67 s</td>
            <td>51ºC</td>
            <td>13.2GB</td>
            <td>~80W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>6</td>
            <td>1024</td>
            <td>137.19 s</td>
            <td>50ºC</td>
            <td>14.4GB</td>
            <td>~90W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>6</td>
            <td>1024</td>
            <td>137.19 s</td>
            <td>50ºC</td>
            <td>14.4GB</td>
            <td>~90W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>10</td>
            <td>1024</td>
            <td><strong>216.04 s</strong></td>
            <td>45ºC</td>
            <td>16GB</td>
            <td>~70W</td>
        </tr>
        <tr>
            <td><strong>2070 Super CUDA</strong></td>
            <td>Transformer</td>
            <td>20</td>
            <td>200</td>
            <td>2</td>
            <td>200</td>
            <td><strong>47.39 s</strong></td>
            <td>48ºC</td>
            <td>1.27GB</td>
            <td>~164W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>20</td>
            <td>500</td>
            <td>2</td>
            <td>500</td>
            <td><strong>73.36 s</strong></td>
            <td>58ºC</td>
            <td>1.48GB</td>
            <td>~196W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>4</td>
            <td>500</td>
            <td><strong>59.98 s</strong></td>
            <td>54ºC</td>
            <td>6.2GB</td>
            <td>~189W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>6</td>
            <td>1024</td>
            <td><strong>72.54 s</strong></td>
            <td>59ºC</td>
            <td>6.8GB</td>
            <td>~205W</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>200</td>
            <td>500</td>
            <td>10</td>
            <td>1024</td>
            <td>DNF (Out of Memory)</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
        </tr>
    </tbody>
</table>

<br/>
<hr/>
<br/>

## Experiment 4 (and Last): Variational Auto-Encoder

<br/>
<br/>
I ran the following on both machines:

<div class="is-size-6 has-background-black-ter">

```shell
cd ../vae
```

</div>
<br/>

On the MacOS, I did the follwing changes in ```main.py```

<div class="is-size-6 has-background-black-ter">

```diff
# To avoid an error if number of workers is > 0
-    parser.add_argument('--no-cuda', action='store_true', default=False,
-                        help='disables CUDA training')
+    parser.add_argument('--no-mps', action='store_true', default=False,
+                        help='disables MPS training')
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Change CUDA flag to mps
-args.cuda = not args.cuda and torch.cuda.is_available()
+args.mps = not args.no_mps and torch.backends.mps.is_available()
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Check if M1 GPU acceleration is supported
-device = torch.device("cuda" if use_mps else "cpu")
+device = torch.device("mps" if use_mps else "cpu")
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
# Let script use M1's GPU acceleration
-kwargs = {'num_workers': 1} if args.cuda else {}
+kwargs = {'num_workers': 0} if args.mps else {}
```

</div>


On both machines I added the following in ```main.py``` to log the time:

<div class="is-size-6 has-background-black-ter">

```diff
# Add time package in imports
+from time import time
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
def train(epoch):
+    t0 = time()
```

</div>

<div class="is-size-6 has-background-black-ter">

```diff
print('====> Epoch: {} Average loss: {:.4f}'.format(
          epoch, train_loss / len(train_loader.dataset)))
+    print(f'Duration for 1 Epoch: {time() - t0:.3f} seconds')
```

</div>

<br/>
----<br/>
<strong class="is-size-3 has-text-light">Results 🏃:</strong>

<br/>
<table class="table mt-5 is-striped is-size-4">
    <thead>
        <tr>
            <td>Chip</td>
            <td>Batch size</td>
            <td>Time</td>
            <td>Temperature</td>
            <td>Memory</td>
            <td>Power</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>M1 Ultra CPU</strong></td>
            <td>128</td>
            <td><strong>3.746 s</strong></td>
            <td>41ºC</td>
            <td>&lt;0.1GB</td>
            <td>~28W</td>
        </tr>
        <tr>
            <td></td>
            <td>5120</td>
            <td><strong>1.933 s</strong></td>
            <td>40ºC</td>
            <td>&lt;0.1GB</td>
            <td>~12W</td>
        </tr>
        <tr>
            <td><strong>M1 Ultra GPU</strong></td>
            <td>128</td>
            <td>8.760 s</td>
            <td>42ºC</td>
            <td>0.6GB</td>
            <td>~30W</td>
        </tr>
        <tr>
            <td></td>
            <td>5120</td>
            <td>1.998 s</td>
            <td>41ºC</td>
            <td>0.34GB</td>
            <td>~28W</td>
        </tr>
        <tr>
            <td><strong>2070 Super CUDA</strong></td>
            <td>128</td>
            <td>6.555 s</td>
            <td>36ºC</td>
            <td>1.2GB</td>
            <td>~51W</td>
        </tr>
        <tr>
            <td></td>
            <td>5120</td>
            <td>6.074 s</td>
            <td>52ºC</td>
            <td>1.3GB</td>
            <td>~52W</td>
        </tr>
    </tbody>
</table>
<br/>
<span class="has-text-danger">Note: </span>This experiment was the rule breaker where the CPU was much faster than both GPUs, this could be due to the very low workload that the overhead of data transfer between disk/RAM to GPU and back was more expensive than the calculations themselves. It could be seen that the M1 GPU did better than the NVIDIA one probably due to the same reason, especially that the M1 chip has unified memory.
<br/>

<br/>
<hr/>

## The Conclusion (and some final notes):

<br/>
<br/>
The take away from these experiments:<br/>

<br/>
1. The M1 Ultra still has a long way to go in terms of supported software development and framework optimization to leverage its full power. Throughout all experiments, the CPU load has never crossed 50%, the memory load has never exceeded 40% and the GPU load didn't hit 90%. I wonder do DL frameworks like TF and PyTorch tap into the Neural Engine Cores at all?
<br/>
<br/>
2. The performance of a dedicated GPU is still superior to any CPU including the M1 CPUs and GPUs. However, M1 chips should be praised for handling such huge workloads with unmatched efficiency in terms of power and temperatures.
<br/>
<br/>
3. The power of the M1 Ultra's GPUs start to be unleashed with very heavy workloads that require big image sizes and/or big batch sizes and very deep architectures. Here it is very common to hit a wall with the dedicated GPU running out of memory, especially the mid-range ones such as the one I tested. In the case of the M1 Ultra and because of the unified memory architecture, it gives you more room for bigger models and batches. Of course higher end GPUs have enough memory to handle such workloads, but one of these GPUs costs as much as a fully-specced Mac OS and may be even more, depending on the market and availability.
<br/>
<br/>
4. Apple clearly has a strategy to keep its M1 machines silent, no fans running. Hence, I tend to agree with the opinions stating that there is some cap being placed on the chips and throttling happens to keep them from overheating and/or spinning the fans. I wish there could be a mode to switch to that allows one to use the chips' full power, especially on a machine like the Mac Studio with good ventilation and big fans that could efficiently dissipate the heat coming from the chips overworking.
<br/>
<br/>
5. All of the experiments I carried out did not factor in the models' performance as I focus on how much and how fast can M1 Ultra run DL model training in comparison with NVIDIA GPU. If you reproduce this work and find that some configurations resulted in increasing loss, well, there you have it!
<br/>
<br/>
  
Finally, am I happy with my purchase and feel that I can make good use of it in my work? ABSOLUTELY!<br/>
As I work mostly on Capsule networks in my research, I had endless encounters with dedicated GPUs running out of memory. CapsNets for those who know it are very computationally expensive AND memory hungry. I maxed out a 48GB NVIDIA RTX A6000 with a not very deep CapsNet and medium image sizes (360 x 360 px)! Now I think I have more room for such workloads and experiments, but let's see! <br/>

To Be Continued...
